import React from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Button, Grid, TextField, Tooltip } from "@mui/material";
const { search } = useLocation();
const query = React.useMemo(() => new URLSearchParams(search), [search]);
// 先ほど指定したパラメータ名(ここでは"hoge")を指定
const hoge = query.get("hoge");

const Optional = ({ isConfirm }) => {
  const [optionalRequest, setOptionalRequest] = React.useState({
    request: null,
  });
  return (
    <>
      {!isConfirm ? <p style={{ textAlign: "center" }}>ご相談下さい</p> : null}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div style={{ textAlign: "center" }}>
          <div>
            <Grid container>
              <Grid sm={2} />
              <Grid lg={8} sm={8} spacing={10}>
                {isConfirm ? (
                  <span>{optionalRequest?.consultation}</span>
                ) : (
                  <Tooltip
                    title="ご相談内容を記入することができます"
                    placement="top-start"
                    arrow
                    value={optionalRequest.consultation}
                    onChange={(evt) =>
                      setOptionalRequest((state) => {
                        return { ...state, consultation: evt.target.value };
                      })
                    }
                  >
                    <TextField
                      label="ご相談内容"
                      fullWidth
                      margin="normal"
                      rows={4}
                      multiline
                      variant="outlined"
                      placeholder="その他ご要望等あれば、ご記入ください"
                    />
                  </Tooltip>
                )}
              </Grid>
            </Grid>
          </div>
          {!isConfirm ? (
            <div style={{ textAlign: "center" }}>
              <Link to="/Questionnaire">
                <Button variant="outlined" size="medium">
                  戻る
                </Button>
              </Link>
              <Link to="/Confirm">
                <Button variant="contained" size="medium">
                  次へ
                </Button>
              </Link>
            </div>
          ) : null}
        </div>
      </motion.div>
    </>
  );
};
export default Optional;
