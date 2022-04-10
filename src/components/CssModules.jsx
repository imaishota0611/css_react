import classes from "./CssModules.module.scss";

export const CssModules = () => {
  return (
    <div className={classes.containerStyle}>
      <p className={classes.titleStyle}>- CSS Modules -</p>
      <button className={classes.buttonStyle}>FIGHT!</button>
    </div>
  );
};
