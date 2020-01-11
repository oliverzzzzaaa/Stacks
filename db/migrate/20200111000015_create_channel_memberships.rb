class CreateChannelMemberships < ActiveRecord::Migration[5.2]
  def change
    create_table :channel_memberships do |t|
      t.integer :user_id, null: false, foreign_key: true
      t.integer :channel_id, null: false, foreign_key: true
      t.timestamps
    end
  end
end
