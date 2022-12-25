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
        Schema::create('question_marks', function (Blueprint $table) {
            $table->id();
            $table->integer("assignmentId");
            $table->integer("marks");
            $table->integer("questionId");
            $table->integer("studentId");
            $table->integer("partId");
            $table->string("type");
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
        Schema::dropIfExists('question_marks');
    }
};
