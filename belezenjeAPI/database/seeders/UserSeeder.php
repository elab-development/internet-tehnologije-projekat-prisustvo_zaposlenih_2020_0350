<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = \Faker\Factory::create();
        User::create([
            'name' => 'Nina Zivkovic',
            'email' => 'ninaz@gmail.com',
            'password' => bcrypt('666666'),
            'rola' => 'admin'
        ]);

        User::create([
            'name' => 'Mina Zavisic',
            'email' => 'minaz@gmail.com',
            'password' => bcrypt('666666'),
            'rola' => 'admin'
        ]);

        for ($i = 1; $i <= 8; $i++) {
            User::create([
                'name' => $faker->name,
                'email' => $faker->email,
                'password' => bcrypt('666666'),
            ]);
        }
    }
}
