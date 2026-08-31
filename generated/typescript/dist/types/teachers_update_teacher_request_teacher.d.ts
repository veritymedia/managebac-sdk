export interface TeachersUpdateTeacherRequestTeacher {
    /**
     * User’s primary email address. Used for login and notifications. Required on create.
     */
    email?: string;
    /**
     * User’s first given name.
     */
    firstName?: string;
    /**
     * User’s additional name.
     */
    middleName?: string;
    /**
     * Minimum 6-character password. Only used on POST (create) and PATCH (update). Never returned in GET responses. If omitted on create, a random password is generated and the user receives a welcome email.
     *
     */
    password?: string;
    /**
     * User’s surname.
     */
    lastName?: string;
    /**
     * User’s handle (may differ to given name).
     */
    nickname?: string;
    /**
     * User’s additional names or variant in a different language.
     */
    otherName?: string;
    /**
     * School’s own unique ID for user.
     */
    identifier?: string;
    /**
     * The user's gender. Accepts "Male", "Female", or other values depending on school configuration.
     */
    gender?: string;
    /**
     * User’s dob; yyyy-mm-dd.
     */
    birthday?: string;
    /**
     * User’s home number.
     */
    phoneNumber?: string;
    /**
     * User’s mobile number.
     */
    mobilePhoneNumber?: string;
    /**
     * First line of user’s home address.
     */
    streetAddress?: string;
    /**
     * Second (optional) line of user’s home address.
     */
    streetAddressIi?: string;
    /**
     * City of user’s home address.
     */
    city?: string;
    /**
     * State of user’s home address.
     */
    state?: string;
    /**
     * Postal/zip code of user’s home address.
     */
    zipcode?: string;
    /**
     * Country of user’s home address.
     */
    country?: string;
    /**
     * One or more nationalities of the user.
     */
    nationalities?: string[];
    /**
     * Fluent language/s of the user.
     */
    languages?: string[];
    /**
     * A user's Portal Account UID
     */
    accountUid?: string;
    /**
     * The time zone of the user.
     */
    timezone?: string;
}
