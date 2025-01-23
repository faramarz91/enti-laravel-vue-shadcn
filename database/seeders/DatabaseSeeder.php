<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        $adminRole = Role::create(['name' => 'admin']);
        $userRole = Role::create(['name' => 'user']);
        User::factory()->hasAttached([$adminRole , $userRole])->create([
            'name' => 'faramarz',
            'email' => 'fara@example.com',
        ]);

        User::factory()->hasAttached($adminRole)->create([
            'name' => 'admin',
            'email' => 'admin@example.com',
        ]);
        User::factory()->hasAttached($userRole)->create([
            'name' => 'user',
            'email' => 'user@example.com',
        ]);
    }
}
