class CreatePostings < ActiveRecord::Migration[5.0]
  def change
    create_table :postings do |t|
      t.references :user, foreign_key: true
      t.references :course, foreign_key: true
      t.references :institution, foreign_key: true
      t.string :image_id
      t.text :description
      t.boolean :is_official_posting
      t.timestamps
    end
  end
end
