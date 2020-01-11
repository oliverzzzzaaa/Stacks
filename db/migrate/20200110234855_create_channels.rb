class CreateChannels < ActiveRecord::Migration[5.2]
  def change
    create_table :channels do |t|
      t.integer :host_id, null: false, foreign_key: true
      t.string :channel_name, null: false
      t.string :channel_topic
      t.integer :private_message, null: false
      t.integer :workspace_id, null: false, foreign_key: true
      t.timestamps
    end
    add_index :channels, :channel_name, unique: true
  end
end
