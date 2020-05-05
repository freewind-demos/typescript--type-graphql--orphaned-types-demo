import path from 'path';
import 'reflect-metadata';
import {buildSchema} from 'type-graphql';

import DummyResolver from './dummy/DummyResolver';
import MyOrphanedType from './MyOrphanedType';

async function main() {
  const schema = await buildSchema({
    resolvers: [DummyResolver],
    validate: false, // https://github.com/MichalLytek/type-graphql/issues/150
    orphanedTypes: [MyOrphanedType],
    emitSchemaFile: path.resolve(__dirname, '../dist/schema.graphql')
  });
}

main();
