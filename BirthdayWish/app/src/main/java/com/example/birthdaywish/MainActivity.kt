package com.example.birthdaywish

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.EditText
import android.widget.Toast

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
    }

    fun createBirthdayCard(view: View) {
        val editText = findViewById<EditText>(R.id.nameInput) // get the element
        val name = editText.text.toString() // get the text from the element
        val intent = Intent(this, BirthCardActivity::class.java)
        intent.putExtra(BirthCardActivity.NAME_EXTRA,name)
        startActivity(intent)
    }
}