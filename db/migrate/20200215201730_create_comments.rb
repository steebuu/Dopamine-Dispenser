class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.integer :user_id, null: false
      t.integer :image_id, null: false
      t.text :body, null: false
      
      t.timestamps
    end
    add_index :comments, :user_id
    add_index :comments, :image_id
  end
end
