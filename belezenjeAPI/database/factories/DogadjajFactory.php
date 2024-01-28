<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class DogadjajFactory extends Factory
{

    public function definition()
    {
        return [
            'naziv_dogadjaja' => fake()->name,
            'vreme_pocetka' => fake()->dateTime(),
            'vreme_kraja' => fake()->dateTime(),
        ];
    }
}
