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
        Schema::table('prisustva', function (Blueprint $table) {
            $table->foreign('dogadjaj_id')->references('id')->on('dogadjaji');
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('ocena_id')->references('id')->on('ocene');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('prisustva', function (Blueprint $table) {
            $table->dropForeign('prisustva_dogadjaj_id_foreign');
            $table->dropForeign('prisustva_user_id_foreign');
            $table->dropForeign('prisustva_ocena_id_foreign');
        });
    }
};
