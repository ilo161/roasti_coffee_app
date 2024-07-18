import {defineField, defineType} from 'sanity'

export const userType = defineType({
    name: 'user',
    title: 'User',
    type: 'document',
    fields: [ 
        defineField({
            name: 'username',
            title: 'Username',
            type: 'string'
        }),
        defineField({
            name: 'firstName',
            title: 'First Name',
            type: 'string'
        }),
        defineField({
            name: 'lastName',
            title: 'Last Name',
            type: 'string'
        }),
        defineField({
            name: 'email',
            title: 'Email',
            type: 'email'
        }),
        defineField({
            name: 'shippingAddress',
            title: 'Shipping Address',
            type: 'string',
        }),
        defineField({
            name: 'shippingAddressB',
            title: 'Shipping Address B',
            type: 'string'
        }),
        defineField({
            name: 'billingAddress',
            title: 'Billing Address',
            type: 'string'
        }),
        defineField({
            name: 'avatar',
            title: 'Avatar',
            type: 'image'
        })
    ]
})