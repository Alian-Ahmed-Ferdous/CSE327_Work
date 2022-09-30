package com.example.memeshare


import android.content.Intent
import android.graphics.drawable.Drawable
import android.os.Bundle
import android.view.View
import android.widget.Button
import android.widget.ImageView
import android.widget.ProgressBar
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import com.android.volley.Request
import com.android.volley.Response
import com.android.volley.toolbox.JsonObjectRequest
import com.android.volley.toolbox.Volley
import com.bumptech.glide.Glide
import com.bumptech.glide.load.DataSource
import com.bumptech.glide.load.engine.GlideException
import com.bumptech.glide.request.RequestListener
import com.bumptech.glide.request.target.Target

class MainActivity : AppCompatActivity() {
    var memeUrl: String? = null
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        lodMeme()
    }

    private fun lodMeme(){
        val url = "https://meme-api.herokuapp.com/gimme"
        val meme = findViewById<ImageView>(R.id.Meme)
        val progressBar = findViewById<ProgressBar>(R.id.progressBar)
        val nextButton = findViewById<Button>(R.id.nextButton)
        val shareButton = findViewById<Button>(R.id.shareButton)
        nextButton.isEnabled = false
        shareButton.isEnabled = false
        progressBar.visibility = View.VISIBLE
        // Request a string response from the provided URL.
        val jsonObjectRequest = JsonObjectRequest(Request.Method.GET, url, null,
            { response ->
                memeUrl = response.getString("url")
                Toast.makeText(this, "Dankest meme coming up", Toast.LENGTH_LONG).show()
                    Glide.with(this).load(memeUrl).listener(object : RequestListener<Drawable> {
                        override fun onResourceReady(
                            e: Drawable?,
                            model: Any?,
                            target: Target<Drawable>?,
                            dataSource: DataSource?,
                            isFirstResource: Boolean
                        ): Boolean {
                            nextButton.isEnabled = true
                            shareButton.isEnabled = true
                            progressBar.visibility = View.GONE
                            return false
                        }

                        override fun onLoadFailed(
                            e: GlideException?,
                            model: Any?,
                            target: Target<Drawable>?,
                            isFirstResource: Boolean
                        ): Boolean {
                            progressBar.visibility = View.GONE
                            return false
                        }
                    }).into(meme)
            },
            Response.ErrorListener {
                progressBar.visibility = View.GONE
                Toast.makeText(this,"Oop! Something is not working", Toast.LENGTH_LONG).show()
            })

        // Add the request to the RequestQueue.
        MySingleton.getInstance(this).addToRequestQueue(jsonObjectRequest)
    }
    fun shareMeme(view: View) {
        val i = Intent(Intent.ACTION_SEND)
        i.type = "text/plain"
        i.putExtra(Intent.EXTRA_TEXT, "Hi, checkout this meme $memeUrl")
        startActivity(Intent.createChooser(i, "Share this meme with"))
    }
    fun nextMeme(view: View) {
        lodMeme()
    }
}