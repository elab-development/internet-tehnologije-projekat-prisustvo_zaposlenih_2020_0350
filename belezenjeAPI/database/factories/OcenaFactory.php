<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class OcenaFactory extends Factory
{

    public function definition()
    {
        return [
            'oznaka' => fake()->randomLetter(),
            'opis' => fake()->text(20),
        ];
    }
}
