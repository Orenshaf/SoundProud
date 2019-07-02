class ChangeTrackTimeFromTimeToString < ActiveRecord::Migration[5.2]
  def change
    change_column :comments, :track_time, :string
  end
end
