class CreateStepsTable < ActiveRecord::Migration      # second attempt, rolled back the first one
  def change
    create_table :steps_tables do |t|
      t.text :content, null: false
      t.integer :todo_id, null: false
      t.boolean :done, null: false, default: false

      t.timestamps
    end
  end
end
