class CreateWorkspaces < ActiveRecord::Migration[5.2]
  def change
    create_table :workspaces do |t|
      t.integer :host_id, null: false
      t.string :workspace_name, null: false
      t.timestamps
    end
    add_index :workspaces, :workspace_name, unique: true
  end

end
