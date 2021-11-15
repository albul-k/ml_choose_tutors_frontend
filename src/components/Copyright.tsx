// Material ui components
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

// Material ui icons
import GitHubIcon from '@material-ui/icons/GitHub';

export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      <Link color="inherit" href="https://github.com/albul-k/ml_choose_tutors_frontend" target="_blank">
        <GitHubIcon />
        albul-k
      </Link>
    </Typography>
  );
};