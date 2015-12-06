class CreateSteps < ActiveRecord::Migration
  def change
    create_table :steps do |t|
      t.integer :todo_id, null: false
      t.boolean :done, null: false, default: false
      t.text :body

      t.timestamps
    end
  end
end
