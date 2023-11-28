import * as fs from "fs"
import pbjs from "protobufjs"
import { Project, StructureKind, SyntaxKind } from "ts-morph"





const protoMapFile = new Project().createSourceFile("./map.ts", fs.readFileSync('./protoMapTemplate.ts').toString("utf-8"))

const enumProtoId = protoMapFile.getEnumOrThrow("EnumProtoId")
const enumProtoName = protoMapFile.getEnumOrThrow("EnumProtoName")
const protoId2NameObject = protoMapFile.getVariableDeclaration("protoId2Name").getInitializerIfKindOrThrow(SyntaxKind.ObjectLiteralExpression)
const protoName2IdObject = protoMapFile.getVariableDeclaration("protoName2Id").getInitializerIfKindOrThrow(SyntaxKind.ObjectLiteralExpression)



const { loadSync } = pbjs
const protoRoot = loadSync("./Game.proto")
const gameProtoRoot = protoRoot.Game.nested
for (const [index, msgName] of Object.keys(gameProtoRoot).entries()) {
    // 过滤实际传输消息协议
    const fileterString = ["S2C", "C2S"]
    if (fileterString.includes(msgName.slice(0, 3))) {
        /** protoId2Name */
        protoId2NameObject.addPropertyAssignment({
            name: 1000 + index,
            initializer: (writer) => writer.write(`"${msgName}"`)
        })

        /** protoName2Id */
        protoName2IdObject.addPropertyAssignment({
            name: msgName,
            initializer: (writer) => writer.write(`${1000 + index}`)
        })

        /** enumProtoId */
        enumProtoId.addMember({ name: msgName, value: 1000 + index })

        /** enumProtoName */
        enumProtoName.addMember({ name: msgName, value: `${msgName}` })
    }

}
fs.writeFileSync("./protoMap.ts", protoMapFile.getText(), { encoding: "utf-8" })


