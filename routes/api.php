<?php

use App\Http\Middleware\EnsureUserHasAdmin;
use Illuminate\Support\Facades\Route;

Route::domain('panel.'.env('APP_DOMAIN'))
    ->prefix('v1')
    ->middleware(EnsureUserHasAdmin::class)
    ->group(base_path('routes/api/admin/api_v1.php'));

Route::prefix('v1')
    ->group(base_path('routes/api/api_v1.php'));
