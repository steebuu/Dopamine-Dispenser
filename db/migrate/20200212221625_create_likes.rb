class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.integer :user_id, null: false
      t.integer :image_id, null: false

      t.timestamps
    end
    add_index :likes, :user_id
    add_index :likes, :image_id
  end
end
