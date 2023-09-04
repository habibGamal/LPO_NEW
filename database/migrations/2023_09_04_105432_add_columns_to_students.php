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
        Schema::table('students', function (Blueprint $table) {
            $table->string("avatar_path")->nullable();
            $table->string("arabic_first_name")->nullable();
            $table->string("arabic_second_name")->nullable();
            $table->string("address")->nullable();
            $table->string("zip_code")->nullable();
            $table->string("city")->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('students', function (Blueprint $table) {
            $table->drop(['avatar_path', 'arabic_first_name', 'arabic_second_name', 'address', 'zip_code', 'city']);
        });
    }
};
