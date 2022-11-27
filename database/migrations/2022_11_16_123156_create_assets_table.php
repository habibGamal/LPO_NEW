<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
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
        Schema::create('assets', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique();
            $table->set('assets_type',['images','videos']);
            $table->longText('content');
        });

        DB::table('assets')->insert([
            [
                'name'=>'studentImages',
                'assets_type'=>'images',
                'content'=>'{}'
            ],
            [
                'name'=>'authorImages',
                'assets_type'=>'images',
                'content'=>'{}'
            ],
            [
                'name'=>'studentVideos',
                'assets_type'=>'videos',
                'content'=>'{}'
            ],
            [
                'name'=>'authorVideos',
                'assets_type'=>'videos',
                'content'=>'{}'
            ],
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('assets');
    }
};
