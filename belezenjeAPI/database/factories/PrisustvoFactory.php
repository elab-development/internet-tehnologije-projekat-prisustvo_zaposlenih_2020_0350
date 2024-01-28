<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class PrisustvoFactory extends Factory
{

    public function definition()
    {
        return [
            'dogadjaj_id' => fake()->numberBetween(1, 4),
            'user_id' => fake()->numberBetween(1, 10),
            'ocena_id' => fake()->numberBetween(1, 3),
        ];
    }
}
