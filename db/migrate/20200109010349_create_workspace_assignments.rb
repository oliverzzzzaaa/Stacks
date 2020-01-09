class CreateWorkspaceAssignments < ActiveRecord::Migration[5.2]
  def change
    create_table :workspace_assignments do |t|
      t.references :user, index: true, foreign_key: true
      t.references :workspace, index: true, foreign_key: true
      t.timestamps
    end
  end
end
