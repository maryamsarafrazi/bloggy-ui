"use client";

import { InputAdornment, TextField } from "@mui/material";

export default function Header() {
  return (
    <header>
      <div className="h-[72px] bg-neutral-300 flex flex-row w-full justify-between items-center px-24 py-3">
        <div className="flex flex-row items-center">
          <div className="mr-2">
            <img
              alt="Profile Picture"
              src="https://i.pravatar.cc/300?img=47"
              className="w-12 h-12 rounded-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-title-md text-neutral-950">Maria Style</p>
            <p className="text-label-md text-neutral-500">UI/UX Designer</p>
          </div>
        </div>

        <div className="flex flex-row gap-2">
          <TextField
            placeholder="Search for a keyword ..."
            variant="outlined"
            //size="small"
            className="w-72 h-10 bg-white rounded
              [&_.MuiOutlinedInput-root]:font-sans
              [&_.MuiOutlinedInput-root]:text-body-md
              [&_.MuiOutlinedInput-root]:h-full
            [&_.MuiOutlinedInput-root]:border-black
            [&_.MuiOutlinedInput-root_input]:px-1
            [&_.MuiOutlinedInput-root_input]:border-black"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <img
                      className="w-4 h-4 object-cover"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABZElEQVR4nN2UwUoDMRCGc9GLxZuCr6CIvWj1hfYQCGz+P/d9g65d+zZ9AEE82Yp36xNYQQVFGZ2FKmw3qYroQGAhf+bL/JkdY/5t5Hm+A6AkOQFwJ0u/S9lbOnFRFKsATkg+kXxpWLJXiXaZ5CNJAuCe5LH3/oDkmq4egAHJB9WMkiB6c7nhtfd+t0nnvd8DMFVtFZVcfJXS5eaLks9DtBKxa9u0hT6olF2ayCBZ6Zl+DOBSS95PAPQUMI4Rz0Rsre3EAqy1HQXctopFlApwzq1r1bNoi6QtYwHe+0MFTFIeeZDa1og5U7eptJ60YJs+hNAF8AjgOapNP7XddBEkhNAleaP2DE1sZFm2Uo8K/Ykq8VkeXlYI4UhskZvXc0lalORmNERmi1bSOOzwbstQk6dD5sZ1Xw/PdGSPddi9eS5JvwSJCefcBskLre4qz/OtvwnhR7vOvh1gFELynOTpjwB+JV4Bpv9A0lTg3k4AAAAASUVORK5CYII="
                      alt="search"
                    />
                  </InputAdornment>
                ),
              },
            }}
          />

          <button className="h-10 w-auto bg-neutral-950 hover:bg-neutral-700 text-neutral-50 text-label-lg rounded px-4">
            Join newsletter
          </button>
        </div>
      </div>
    </header>
  );
}
