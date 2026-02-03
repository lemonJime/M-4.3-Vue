import type { Meal } from "@/types/meals";

export const mockMeals: Meal[] = [
    {
        id: crypto.randomUUID(),
        name: 'Tostadas con aguacate',
        dayOfWeek: 'Monday',
        mealType: 'Breakfast',
        createdAt: Date.now(),
    },
    {
        id: crypto.randomUUID(),
        name: 'Ensalada César',
        dayOfWeek: 'Monday',
        mealType: 'Lunch',
        createdAt: Date.now(),
        isFavorite: true
    },
    {
        id: crypto.randomUUID(),
        name: 'Crema de verduras',
        dayOfWeek: 'Monday',
        mealType: 'Dinner',
        createdAt: Date.now(),
    },
    {
        id: crypto.randomUUID(),
        name: 'Yogur con frutas',
        dayOfWeek: 'Tuesday',
        mealType: 'Breakfast',
        createdAt: Date.now(),
        isFavorite: true
    },
    {
        id: crypto.randomUUID(),
        name: 'Pasta boloñesa',
        dayOfWeek: 'Tuesday',
        mealType: 'Lunch',
        createdAt: Date.now(),
    },
    {
        id: crypto.randomUUID(),
        name: 'Avena con plátano',
        dayOfWeek: 'Wednesday',
        mealType: 'Breakfast',
        createdAt: Date.now(),
    },
    {
        id: crypto.randomUUID(),
        name: 'Tortilla francesa',
        dayOfWeek: 'Wednesday',
        mealType: 'Dinner',
        createdAt: Date.now(),
    },
    {
        id: crypto.randomUUID(),
        name: 'Pollo al horno con patatas',
        dayOfWeek: 'Thursday',
        mealType: 'Lunch',
        createdAt: Date.now(),
    },
    {
        id: crypto.randomUUID(),
        name: 'Salmón a la plancha',
        dayOfWeek: 'Thursday',
        mealType: 'Dinner',
        createdAt: Date.now(),
        isFavorite: true
    },
    {
        id: crypto.randomUUID(),
        name: 'Café con croissant',
        dayOfWeek: 'Friday',
        mealType: 'Breakfast',
        createdAt: Date.now(),
    },
    {
        id: crypto.randomUUID(),
        name: 'Hamburguesa casera',
        dayOfWeek: 'Friday',
        mealType: 'Lunch',
        createdAt: Date.now(),
    },
    {
        id: crypto.randomUUID(),
        name: 'Pizza casera',
        dayOfWeek: 'Saturday',
        mealType: 'Dinner',
        createdAt: Date.now(),
        isFavorite: true
    },
    {
        id: crypto.randomUUID(),
        name: 'Huevos revueltos',
        dayOfWeek: 'Sunday',
        mealType: 'Breakfast',
        createdAt: Date.now(),
    },
    {
        id: crypto.randomUUID(),
        name: 'Paella',
        dayOfWeek: 'Sunday',
        mealType: 'Dinner',
        createdAt: Date.now(),
    },
];