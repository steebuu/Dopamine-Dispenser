class ChangeNameToFullNameInUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :name, :string
    add_column :users, :full_name, :string
  end
end
