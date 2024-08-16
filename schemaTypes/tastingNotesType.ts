import {defineField, defineType} from 'sanity'

export const tastingNotesType = defineType({
    name: 'tastingNote',
    title: 'Tasting Note Library',
    type: 'document',
    fields: [
         defineField({
            name: 'tastingNoteAdjective',
            title: 'Tasting Note',
            type:'string',
            description: 'Adjective for a Tasting Note',
            validation: rule => rule.required()
        }),
        defineField({
            name: 'ParentTastingNote',
            title: 'Parent Tasting Note',
            description: 'The parent tasting note (if applicable) from the SCA Coffee Tasting Wheel',
            type: 'reference',
            to: [{type: 'tastingNote'}]
        }),
        {
        name: 'TastingNoteColor',
        title: 'SCA Color Options',
        type: 'color'
        }
    ]
})