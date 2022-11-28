package com.example.notes

import android.content.Context
import android.os.Build.VERSION_CODES.R
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView

class NoteRVAdapter(private val  context: Context, private val listener: INoteRVAdapter): RecyclerView.Adapter<NoteRVAdapter.NoteViewHolder>() {
    private val  allNotes = ArrayList<Note>()
    inner class NoteViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView){
        val textView: TextView = itemView.findViewById(R
        val deleteButton: ImageView = itemView.findViewById(R..deleteButton)
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): NoteViewHolder {
        val viewHolder = NoteViewHolder(LayoutInflater.from(context).inflate(R.layout.item_note, parent, false))
        viewHolder.deleteButton.setOnClickListener{
            listener.onitemClicked(allNotes[viewHolder.adapterPosition])
        }
        return viewHolder
    }

    override fun onBindViewHolder(holder: NoteViewHolder, position: Int) {
        val currentNote = allNotes[position]
        holder.textView.text = currentNote.text
    }

    override fun getItemCount(): Int {
        return allNotes.size
    }

    fun updateList(newList: List<Note>){
        allNotes.clear()
        allNotes.addAll(newList)

        notifyDataSetChanged()
    }
}

interface INoteRVAdapter {
    fun onitemClicked(note: Note)
}