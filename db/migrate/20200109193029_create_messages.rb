class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.string :body, null: false
      t.integer :user_id, null: false, foreign_key: true
      t.integer :workspace_id, null: false, foreign_key: true
      t.integer :channel_id, null: false, foreign_key: true
      t.timestamps
    end
  end
end
