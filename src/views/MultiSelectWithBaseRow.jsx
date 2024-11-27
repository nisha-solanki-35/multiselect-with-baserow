import React, { useState } from "react"
import { Checkbox, Container, FormControl, InputLabel, MenuItem, Select, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material"

const MultiSelectWithBaseRow = () => {
  const rows = [
    { id: 1, name: "Row 1" },
    { id: 2, name: "Row 2" },
    { id: 3, name: "Row 3" },
    { id: 4, name: "Row 4" },
    { id: 5, name: "Row 5" },
    { id: 6, name: "Row 6" }
  ]

  const [checkedRows, setCheckedRows] = useState([rows[0]?.id])
  const [baseRow, setBaseRow] = useState(rows[0]?.id)

  const handleCheckboxChange = (id) => {
    setCheckedRows((prev) => {
      const updated = prev.includes(id)
        ? prev.filter((rowId) => rowId !== id)
        : [...prev, id]
      if (!updated.includes(baseRow)) {
        setBaseRow(updated[0] || "")
      }
      return updated
    })
  }

  const handleBaseRowChange = (event) => {
    setBaseRow(event.target.value)
  }

  return (
    <Container style={{ marginTop: '20px' }}>
      <Typography variant="h6">Multi-Select with Base Row</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Select Rows</TableCell>
            <TableCell>Row Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>
                <Checkbox
                  checked={checkedRows?.includes(row?.id)}
                  onChange={() => handleCheckboxChange(row?.id)}
                />
              </TableCell>
              <TableCell>{row?.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <FormControl fullWidth margin="normal">
        <InputLabel>Base Row</InputLabel>
        <Select
          labelId="base-row-label"
          value={baseRow}
          onChange={handleBaseRowChange}
          label='Base Row'
        >
          {checkedRows?.map((id) => (
            <MenuItem key={id} value={id}>
              {rows?.find((row) => row?.id === id)?.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Container>
  )
}

export default MultiSelectWithBaseRow
