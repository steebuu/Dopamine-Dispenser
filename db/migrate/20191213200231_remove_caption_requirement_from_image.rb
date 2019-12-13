class RemoveCaptionRequirementFromImage < ActiveRecord::Migration[5.2]
  def change
    change_column :images, :caption, :text, :null => true
  end
end
