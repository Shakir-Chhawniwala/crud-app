import React, { useState,useEffect,useContext } from "react";
import fetch from "cross-fetch";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CircularProgress from "@material-ui/core/CircularProgress";
import {PostContext} from "../../store/post-context" 

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

 const SearchBar = () => {
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const loading = open && options.length === 0;

  const context = useContext(PostContext)

  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
    //   const response = await fetch(
    //     "https://country.register.gov.uk/records.json?page-size=5000"
    //   );
    //   await sleep(1e3); // For demo purposes.
    //   const countries = await response.json();

      if (active) {
        setOptions(Object.keys(context.posts).map((post) => context.posts[post].item[0]));
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);
  const onChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Autocomplete
      id="asynchronous-demo"
      style={{ width: 300 }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      getOptionSelected={(option, value) => option.name === value.name}
      getOptionLabel={(option) => option.name}
      options={options}
      loading={loading}
      renderInput={(params) => (
        <TextField
          onChange={onChange}
          {...params}
          label="Asynchronous"
          variant="outlined"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  );
}
export default SearchBar