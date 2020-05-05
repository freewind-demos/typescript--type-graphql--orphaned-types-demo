import 'reflect-metadata';
import path from 'path';
import {buildSchemaSync} from 'type-graphql';

import DummyResolver from './dummy/DummyResolver';
import MyOrphanedType from './MyOrphanedType';

const schema = buildSchemaSync({
  resolvers: [DummyResolver],
  validate: false, // https://github.com/MichalLytek/type-graphql/issues/150
  orphanedTypes: [MyOrphanedType],
  emitSchemaFile: path.resolve(__dirname, '../dist/schema.graphql')
})

console.log(schema.getTypeMap());
