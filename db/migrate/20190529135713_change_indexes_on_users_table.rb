class ChangeIndexesOnUsersTable < ActiveRecord::Migration[5.2]
  def change
    remove_index :users, :username
    add_index :users, :email
    add_index :users, :profile_url
  end
end
