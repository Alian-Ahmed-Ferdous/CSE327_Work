package com.example.birthdaywish

import android.os.Bundle
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity


class BirthCardActivity : AppCompatActivity() {
    companion object{
        const val NAME_EXTRA = "name_extra"
    }
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_birth_card)
        val intent = intent
        val name= intent.getStringExtra(NAME_EXTRA)
        val birthdayWishTextView = findViewById<TextView>(R.id.BirthdayWish)
        birthdayWishTextView.text = "Happy Birthday $name!"
    }
}