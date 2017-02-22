export const API_ROOT_DEV = "http://192.168.0.171:9080"
export const API_ROOT_PROD = "http://rbac-new.dazhuanjia.com"

export const LEGACY_API_ROOT_DEV= "http://192.168.0.171:9080"
export const LEGACY_API_ROOT_PROD= "http://rbac-new.dazhuanjia.com"

const IMG_ROOT_DEV="http://dzj-test.img-cn-shanghai.aliyuncs.com"
const IMG_ROOT_PROD="http://dzj-prod-1.img-cn-shanghai.aliyuncs.com"
export const IMG_ROOT = process.env.NODE_ENV === 'production' ? IMG_ROOT_PROD : IMG_ROOT_DEV

const IMG_SERVER_DEV="http://192.168.0.171:9080"
const IMG_SERVER_PROD="http://139.224.60.88"
export const IMG_SERVER = process.env.NODE_ENV === 'production' ? IMG_SERVER_PROD : IMG_SERVER_DEV

const BIZ_USER_LOGIN_DEV="http://192.168.0.171:9080/biz/index.html#/login"
const BIZ_USER_LOGIN_PROD="http://www.dazhuanjia.com/biz/index.html#/login"
export const BIZ_USER_LOGIN = process.env.NODE_ENV === 'production' ? BIZ_USER_LOGIN_PROD : BIZ_USER_LOGIN_DEV

const MSL_USER_LOGIN_DEV="http://192.168.0.171:9080/msl/index.html#/login"
const MSL_USER_LOGIN_PROD="http://www.dazhuanjia.com/msl/index.html#/login"
export const MSL_USER_LOGIN=process.env.NODE_ENV === 'production' ? MSL_USER_LOGIN_PROD : MSL_USER_LOGIN_DEV

const LEGACY_ENTRY_DEV="http://192.168.0.171:9080/legacy/"
const LEGACY_ENTRY_PROD="http://www.dazhuanjia.com/legacy/"
export const LEGACY_ENTRY=process.env.NODE_ENV === 'production' ? LEGACY_ENTRY_PROD : LEGACY_ENTRY_DEV

export const USER_AGREEMENT_URL="http://rbac-new.dazhuanjia.com/file/user_agreement.html"

const CASE_STUDY_DEV="/case-study.html"
const CASE_STUDY_PROD="/case-study.html"
export const CASE_STUDY_URL=process.env.NODE_ENV === 'development' ?  CASE_STUDY_DEV : CASE_STUDY_PROD

const HEALTH_RECORD_DEV="/health-record.html"
const HEALTH_RECORD_PROD="/health-record.html"
export const HEALTH_RECORD_URL=process.env.NODE_ENV === 'development' ?  HEALTH_RECORD_DEV : HEALTH_RECORD_PROD

export const DOC_INTEGRAL_RULE="http://rbac-new.dazhuanjia.com/file/doc_point_rule.html"
export const HIM_INTEGRAL_RULE="http://rbac-new.dazhuanjia.com/file/him_point_rule.html"
export const MSL_INTEGRAL_RULE="http://rbac-new.dazhuanjia.com/file/msl_point_rule.html"
export const DZJ_INTEGRAL_RULE="http://rbac-new.dazhuanjia.com/file/dzj_point_rule.html"


export const DZJ_WEB_RECORDCODE="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31011202001007"
