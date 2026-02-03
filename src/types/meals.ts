export type DayOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

export type MealType = 'Breakfast' | 'Lunch' | 'Dinner';


export type Meal = {
    id: string;
    name: string; // Ensalada César
    dayOfWeek: DayOfWeek; // Lunes
    mealType: MealType;  //Comida
    createdAt: number;
    isFavorite?: boolean
}

export type NewMeal = {
    name: string
    dayOfWeek: DayOfWeek
    mealType: MealType
}