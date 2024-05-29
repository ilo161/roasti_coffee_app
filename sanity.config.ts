import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import { availability } from 'sanity-plugin-availability'

import {structure} from './structure'
import {defaultDocumentNode} from './structure/defaultDocumentNode'

export default defineConfig({
  name: 'default',
  title: 'Roasti 2',

  projectId: 'dfen2r5i',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), availability()],

  schema: {
    types: schemaTypes,
  },
})
