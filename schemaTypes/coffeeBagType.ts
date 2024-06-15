import {defineField, defineType} from 'sanity'

export const coffeeBagType = defineType({
    name: 'coffeeBag',
    title: 'Coffee Bag',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: rule => rule.required()
        }),
        defineField({
            name: 'roaster',
            title: 'Roaster',
            type: 'reference',
            to: [{type: 'business'}],
            description: 'The business that roasted this coffee bag.',
            validation: rule => rule.required()
        }),
        defineField({
            name: 'price',
            title: 'Price USD',
            type: 'number',
            validation: rule => rule.required()
        }),

        defineField({
            name: 'roastLevel',
            title: 'Roast Level',
            type: 'number',
            description: 'The roast level of the coffee bag. For example, medium roast which is 3.',
            validation: rule => rule.required().min(0).max(5)
        }),
        defineField({
            name: 'imgFront',
            title: 'Front Image',
            type: 'image',
            description: 'The front image of the coffee bag.',
            validation: rule => rule.required()
        }),
        defineField({
            name: 'imgBack',
            title: 'Back Image',
            type: 'image',
            description: 'The back image of the coffee bag.',
        }),
        defineField({
            name: 'weight',
            title: 'Weight',
            type: 'number',
            description: 'The weight of the coffee bag in oz.',
            validation: rule => rule.required()
        }),
        defineField({
            name: 'tastingNotes',
            title: 'Tasting Notes',
            type: 'string',
            description: 'The tasting notes of the coffee bag.',
        }),
        defineField({
            name: 'isSingleOrigin',
            title: 'Single Origin',
            type: 'boolean',
            description: 'Is this coffee bag a single origin or a blend?',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'string',
            description: 'Description on the bag or website',
        }),
    ],
 })

