class AddProfileUrlColumnToUsersTable < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :profile_url, :string
  end
end
