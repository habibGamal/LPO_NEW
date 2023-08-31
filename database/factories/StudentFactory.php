<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Student>
 */
class StudentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'firstName' => fake()->firstName,
            'secondName' => fake()->lastName,
            'phone' => fake()->phoneNumber,
            'birthday' => fake()->date(),
            'gender' => fake()->randomElement(['male', 'female']),
            'country' => fake()->country,
            'firstLanguage' => fake()->languageCode,
            'secondLanguage' => fake()->languageCode,
            'level' => fake()->numberBetween(1, 10),

        ];
    }
}
