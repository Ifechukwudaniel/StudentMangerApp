package com.biuassist;


import android.content.Intent;
import android.os.Bundle;
import com.facebook.react.ReactActivity;


public class SplashActvity extends ReactActivity  {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        Intent intent = new Intent(this, MainActivity.class);
        startActivity(intent);
        finish();
    }
}
