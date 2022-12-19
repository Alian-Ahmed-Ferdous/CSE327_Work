<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('audio_questions', function (Blueprint $table) {
            $table->id('audioQuestionId');
            $table->string('Question', 150);
            $table->string('Answer', 150);
            $table->integer('assignmentId');
            $table->integer('partId');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('audio_questions');
    }
};
