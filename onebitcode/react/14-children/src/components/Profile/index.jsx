import Title from "../Title"
import ProfileSection from "./ProfileSection"
import styles from "./styles.module.css"
import LinkButton from "../LinkButton"

export default function Profile(props) {
    return (
        <div className={styles.container}>
            <img className={styles.avatar} src={props.avatar} alt={props.name} />
            <Title>
                <span>Name: </span>
                {props.name}
                <button>Follow</button>
            </Title>
            <ProfileSection>{props.bio}</ProfileSection>
            <ProfileSection>{props.phone}</ProfileSection>
            <ProfileSection>{props.email}</ProfileSection>
            <ProfileSection>
                <div className={styles.links}>
                    <LinkButton href={props.githubUrl}>GitHub</LinkButton>
                    <LinkButton href={props.linkedinUrl}>LinkedIn</LinkButton>
                    <LinkButton href={props.twitterUrl}>Twitter</LinkButton>
                </div>
            </ProfileSection>
        </div>
    )
}