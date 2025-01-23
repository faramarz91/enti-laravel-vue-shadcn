<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('page_posts', function (Blueprint $table) {
            $table->id();
            $table->string('section_name');
            $table->foreignId('parent_id')
                ->nullable()
                ->references('id')->on('page_posts')
                ->nullOnDelete();
            $table->string('title')->nullable();
            $table->text('body')->nullable();
            $table->string('image')->nullable();
            $table->string('slug')->nullable();
            $table->json('meta')->nullable();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('front_page_posts');
    }
};
