def non_duplicated_values(values)
  values.select{|val| values.count(val) == 1}
end